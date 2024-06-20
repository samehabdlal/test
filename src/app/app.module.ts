import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegsterComponent } from './regster/regster.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostesComponent } from './postes/postes.component';
import { authintercupterservers } from './posts/auth.intercpter';
import { logingintercpter } from './posts/this.intersupter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegsterComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
    PostesComponent,
  ],
  imports: [BrowserModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:authintercupterservers,
      multi:true
    },
    {provide:HTTP_INTERCEPTORS,
      useClass:logingintercpter,
      multi:true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
