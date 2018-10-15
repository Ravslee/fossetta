import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module'

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { UpdateItemComponent } from './admin/update-item/update-item.component';

import { ProductService } from './providers/product.service'


//Thrid party libs
import { SlideshowModule } from 'ng-simple-slideshow';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    CollectionComponent,
    ProductComponent,
    LoginComponent,
    DashboardComponent,
    AddItemComponent,
    UpdateItemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgtUniversalModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SlideshowModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoadingBarRouterModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    HttpClientModule,       // (Required) For share counts
    HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
    ShareButtonsModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [ProductService],
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
