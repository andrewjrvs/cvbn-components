import { Component, h, Host, State, Element as Element } from '@stencil/core';

@Component({
  tag: 'cvbn-nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true
})
export class NavBar {

  @State()
  slots: Element[] = [];

  @Element() el: HTMLElement;

  constructor() {
    //console.log(document.querySelectorAll('cvbn-navigation-bar > *'));
  }

  private populateSlots(): void {
    this.slots.length = 0;
    this.slots.push(...Array.from(this.el.querySelectorAll(':scope > *')));
  }

  /**
   * Attach the 'parent' class to it's parent
   */
  connectedCallback() {
    this.el.parentElement.classList.add('cvbn-navigation-bar-wrapper');
  }

  componentWillLoad() {
    this.populateSlots()
    console.log(this.slots)
  }

  render() {
    return <Host class="menu" role="navigation">
              <nav part="nav">
               {/* {this.slots.map((link) => 
                <a href={link.getAttribute('href')}><i class={link.getAttribute('icon')}></i></a>
               )} */}
                <div class="items-wrapper">
                  <slot name="item"></slot>
                </div>
                {/* <li class="scrollLink" aria-hidden="true"><a href="javascript:void(0);" id="goToTop"><i class="fas fa-arrow-up"></i></a></li> */}
              </nav>
          </Host>;
  }
}
