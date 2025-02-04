import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jsBrazwebapge';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{

    this.languageService.initLanguage()


    this.titleService.setTitle( "Josué Braz | Software Engineer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'software, engineer'},
      {name: 'description', content: 'I\'m a Software Engineer from Porto, passionate about coding, learning, and bringing interesting ideas to life. Solving problems one line of code at a time!'},
    ]);


    AOS.init();

  }
}
