import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataServiceService: DataServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: DataServiceService,
          useValue: {
            getItems: () =>
              of([
                { isEdible: true, price: 10 },
                { isEdible: false, price: 20 },
              ]),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dataServiceService = TestBed.inject(DataServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call data service and get items on init', () => {
    spyOn(dataServiceService, 'getItems').and.callThrough();

    component.ngOnInit();

    expect(dataServiceService.getItems).toHaveBeenCalled();
    expect(component.items.length).toEqual(2);
  });

  it('should update items on filter', () => {
    component.onFilter('Edible');

    expect(component.items.length).toEqual(1);
    expect(component.items[0].isEdible).toBe(true);
  });

  it('should update items on filter with not edible option', () => {
    component.onFilter('Not Edible');

    expect(component.items.length).toEqual(1);
    expect(component.items[0].isEdible).toBe(false);
  });

  it('should divide price by input value', () => {
    component.dividePriceBy(2);

    expect(component.priceDivider).toEqual(2);
  });
});
