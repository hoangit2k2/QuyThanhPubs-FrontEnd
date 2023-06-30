import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})
export class UserGuideComponent implements OnInit {
  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
