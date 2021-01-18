import { Component, OnInit } from '@angular/core';
import { DataService } from 'D:/Studia/III_semestr/informatyka_aplikacji_internetu_Piwko/IAI_Lab9/app/blog/src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text!: string;
  public id!: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

  }
}

