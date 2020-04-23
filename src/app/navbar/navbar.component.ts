import { ComponentPlaceholderDirective } from './../directives/placeholder/component-placeholder.directive';
import { JoinModalComponent } from './../join-modal/join-modal.component';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(ComponentPlaceholderDirective, {static: false}) joinModalHost: ComponentPlaceholderDirective;

  private closeSub: Subscription;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  openJoinModal() {
    const joinModalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(JoinModalComponent);
    const joinModalHostRef = this.joinModalHost.viewContainerRef;
    joinModalHostRef.clear();
    const joinModalComponentRef = joinModalHostRef.createComponent(joinModalComponentFactory);
    this.closeSub = joinModalComponentRef.instance.closeModal.subscribe(() => {
      this.closeSub.unsubscribe();
      joinModalHostRef.clear();
    });
  }
}
