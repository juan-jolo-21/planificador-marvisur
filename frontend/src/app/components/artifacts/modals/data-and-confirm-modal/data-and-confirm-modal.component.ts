import { Location } from '@angular/common';
import { Component, Inject, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'data-and-confirm-modal-content',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './data-and-confirm-modal.component.html',
  styleUrl: './data-and-confirm-modal.component.css'
})
export class DataAndConfirmModalComponent {

  activeModal = inject(NgbActiveModal);

	@Input() message: string = '';
  

}
 