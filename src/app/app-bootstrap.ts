
import {NgModule} from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from '@angular/http'
import {APP_ROUTER_PROVIDERS} from './app-routes'
import {FormsModule} from '@angular/forms'
import {DemoApp} from './demo-app'

import {provideAppStore, provideReducer} from './services/app-store'
import {imageData} from './reducers/image-list'

@NgModule({
    declarations: [
        DemoApp
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        APP_ROUTER_PROVIDERS,
        provideReducer('imageData', imageData),
        provideAppStore()
    ],
    bootstrap: [
        DemoApp
    ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


