import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'kit-ui-kit-antd',
  templateUrl: './antd.component.html',
})
export class UiKitAntdComponent implements OnInit {
  public kit: { name: string; description: string; link: string }[] = data
  public selectedExampleIndex: number
  public example: { name: string; description: string; link: string }

  constructor(private router: Router) {}

  setExample(index: number, item): void {
    this.selectedExampleIndex = index
    this.example = this.kit[index]
    this.router.navigate([`ui-kits/antd/${item.name}`])
  }

  ngOnInit() {
    const url: string = this.router.url
    const urlSegment: string = url.split('/')[3]
    const index: number = this.kit.findIndex(kit => kit.name === urlSegment)
    this.selectedExampleIndex = index || 0
    this.example = this.kit[this.selectedExampleIndex]
  }
}
