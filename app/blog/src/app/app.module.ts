import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogItemTextComponent } from './blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './blog-item-details/blog-item-details.component';
import { DataService } from './services/data.service';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
