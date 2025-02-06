import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { routes } from './app.routes';
import { TodosModule } from './todo/todo.module';
import { HomeModule } from './home/home.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import { DirectivesModule } from './directives.module';
import { jwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
    MoviesModule,
    HomeModule,
    TodosModule,
    RouterModule,
    HeaderModule,
    DirectivesModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient(withInterceptors([jwtInterceptor]))],
})
export class AppModule {}
