import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';


//@ts-ignore // why i have to do this is beyond me 
import { movies } from '../movies';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent  {

  films = movies;
  addFilm ;
  newFilm ;

    closeResult: string;

  constructor(
                private modalService: NgbModal,
                private formBuilder: FormBuilder
              ) {
    
     this.addFilm = this.formBuilder.group({
      title: '',
      year: '',
      image: ''
    });
  }

  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

    filter() {
      console.log("filter soon!")
  }

   onSubmit(customerData) {
    // Process checkout data here
    this.newFilm = customerData ;

    // movie.push(this.newFilm)
    this.addFilm.reset();

    console.warn('Your order has been submitted', customerData);
    


  }

   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  // share() {
  //   window.alert('The product has been shared!');
  // }

}