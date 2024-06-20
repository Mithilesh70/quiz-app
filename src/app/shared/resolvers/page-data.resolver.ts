import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';

import { catchError, map, of } from 'rxjs';

export const pageDataResolver =
  (
    apiUrl: string,
    useRouteId = true,
    redirectTo: string,
    idKey = 'id'
  ): ResolveFn<any> =>
  (route, state) => {
    const router = inject(Router);
    const http = inject(HttpClient);
    const routeId = useRouteId ? route.params[idKey] : '';
    const finalApiUrl = routeId ? `${apiUrl}/${routeId}` : apiUrl;

    return http.get(finalApiUrl).pipe(
      map((res: any) => {
        return res?.data;
      }),
      catchError((error) => {
        // Handle API error here

        // Redirect to the specified error page
        router.navigate([redirectTo || '/']);

        // Return an empty observable or handle the error as needed
        return of(null);
      })
    );
  };
