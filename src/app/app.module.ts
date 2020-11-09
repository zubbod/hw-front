import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './core/services/config.service';
import { HeaderModule } from './layout/header/header.module';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';

export function loadConfig(config: ConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [AppComponent, TooltipComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, HeaderModule],
  providers: [
    {
      provide: 'imgUri',
      useValue: environment.imgUri,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
