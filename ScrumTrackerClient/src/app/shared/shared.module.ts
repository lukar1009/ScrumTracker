import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    DxButtonModule,
    DxTooltipModule,
    DxPopoverModule,
    DxTextBoxModule,
    DxScrollViewModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}