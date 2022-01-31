import { TestBed, inject } from '@angular/core/testing';

import { ProspectoServiceService } from './prospecto-service.service';

describe('ProspectoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProspectoServiceService]
    });
  });

  it('should be created', inject([ProspectoServiceService], (service: ProspectoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
