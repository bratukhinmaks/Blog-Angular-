import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class InterIntersaptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone(
      {
        setHeaders: {
          auth: 'me jestem authed bitch and you'
        }
      }
    )
    console.log(clone);
    return next.handle(clone)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            console.log('sosi zopu', event.type)
          }
        })
      )
  }
}
