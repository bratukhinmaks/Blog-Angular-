import {NgModule} from '@angular/core';
import {SortPipe} from './pipes/sort.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule],
  exports: [
    SortPipe,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SortPipe]
})

export class SharedModule{
}
