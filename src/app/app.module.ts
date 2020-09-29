import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { OnoffComponent } from './onoff/onoff.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterIntersaptor} from './inter.intersaptor';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    FilterPipe,
    OnoffComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterIntersaptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
