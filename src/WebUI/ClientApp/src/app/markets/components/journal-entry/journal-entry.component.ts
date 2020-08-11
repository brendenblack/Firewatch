import { Component, OnInit, Input } from '@angular/core';
import { JournalEntry } from '../../models/journal';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() journal: JournalEntry;

  expandedSymbols: string[] = [];

  onSymbolClick(symbol: string) {
    if (this.expandedSymbols.includes(symbol)) {
      this.expandedSymbols = this.expandedSymbols.filter(s => s !== symbol);
    } else {
      this.expandedSymbols.push(symbol);
    }
  }
}