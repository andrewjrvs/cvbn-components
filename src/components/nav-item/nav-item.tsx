import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cvbn-nav-item',
  styleUrl: 'nav-item.scss',
  shadow: true
})
export class NavItem {


  @Prop()
  href: string;

  @Prop()
  icon: string;

  @Prop()
  label: string;

  constructor() {
    //console.log(document.querySelectorAll('cvbn-navigation-bar > *'));
  }

  /**
   * Attach the 'parent' class to it's parent
   */
  connectedCallback() {
    //this.el.parentElement.classList.add('cvbn-navigation-bar-wrapper');
  }

  componentWillLoad() {}

  render() {
    return <Host>
              <a href={this.href} aria-label={this.label}>
                {this.icon ? 
                  <i class="cvbn-icon">{this.icon}</i> : <div class="cvbn-icon"><slot name="icon"></slot></div>
                }
              </a>
          </Host>;
  }
}
