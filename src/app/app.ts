import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Footer } from './sharedComponent/footer/footer';
import { Header } from './sharedComponent/header/header';
import { ListConf } from './pages/list-conf/list-conf';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer, ListConf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectName');
}
