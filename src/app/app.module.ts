import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { routes } from './app.routes';
import { TodosModule } from './todo/todo.module';
import { HomeModule } from './home/home.module';
import { provideHttpClient } from '@angular/common/http';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

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
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule {}
