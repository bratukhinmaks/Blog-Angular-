import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OnoffComponent),
  multi: true,
};

@Component({
  selector: 'app-onoff',
  templateUrl: './onoff.component.html',
  styleUrls: ['./onoff.component.scss'],
  providers: [VALUE_ACCESSOR],
})
export class OnoffComponent implements ControlValueAccessor {
  private state = 'off';
  private onChange = (v) => {};
  stateSet(value: string) {
    this.state = value;
    this.onChange(this.state);
  }
  getState(): string {
    return this.state;
  }

  writeValue(state: string): void {
    this.state = state;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean) {
  }

}
