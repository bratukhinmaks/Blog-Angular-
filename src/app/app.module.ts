import {BrowserModule} from '@angular/platform-browser'
import {NgModule, Provider} from '@angular/core';
import {AppComponent} from './app.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {RoutingModule} from './routing.module';
import {PostComponent} from './shared/components/post/post.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import { AuthIntersaptor} from './shared/interceptors/auth.interceptore';
import {SortPipe} from './shared/pipes/sort.pipe';
import {SharedModule} from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthIntersaptor
  }],
  exports: [
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
