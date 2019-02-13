import { Component, OnInit } from '@angular/core';
import { MessageComponent } from 'src/app/message/message/message.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(MessageComponent);
    modalRef.componentInstance.name = 'World';
  }

}
