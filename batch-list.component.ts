import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BatchService } from '../services/batch.service';
import { Batch } from '../models/batch';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css'],
})
export class BatchListComponent implements OnInit {
  batch: Batch | null = null;

  constructor(
    private route: ActivatedRoute,
    private batchService: BatchService
  ) {}

  ngOnInit(): void {
    const batchIdParam = this.route.snapshot.paramMap.get('id');
    if (batchIdParam === null) {
      console.error('Batch ID is missing from the URL');
      return;
    }
    const batchId = +batchIdParam; // Convert to number
    this.batchService.getBatchById(batchId).subscribe(
      (data) => {
        this.batch = data;
      },
      (error) => {
        console.error('Error fetching batch:', error);
      }
    );
  }
}
