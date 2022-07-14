import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]=[
    new Recipe("Ugali" ,"This is ugali recipe","https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"),
    new Recipe("Ugali" ,"This is ugali recipe","https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"),
    new Recipe("Ugali" ,"This is ugali recipe","https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"),
    new Recipe("Ugali" ,"This is ugali recipe","https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"),
    new Recipe("Ugali" ,"This is ugali recipe","https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"),
    new Recipe("Ugali" ,"This is ugali recipe","https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
