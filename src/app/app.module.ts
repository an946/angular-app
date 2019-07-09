import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './server.service';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PlaybuttonComponent } from './playbutton/playbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SearchComponent,
    CardComponent,
    ButtonComponent,
    WishlistComponent,
    PlaybuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
