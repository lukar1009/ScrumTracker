import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interceptors/spinner-interceptor';

@NgModule({
  declarations: [
    SpinnerOverlayComponent
  ],
  imports: [
    CommonModule,
    DxLoadIndicatorModule
  ],
  exports: [
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: SpinnerInterceptor,
    //   multi: true
    // }
  ]
})
export class CoreModule { }
