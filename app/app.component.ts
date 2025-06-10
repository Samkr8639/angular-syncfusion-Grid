import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public data: Object[] = [];
  public complexArrData;
  public filterSettings: Object;
  public siteList: any;
  public pageSettings?: PageSettingsModel;
  public scrollable: any;

  @ViewChild('grid') grid: GridComponent;
  public showScroll: boolean = false;
  ngOnInit(): void {
    this.getData();
    this.pageSettings = { pageSize: 2 };
  }

  scrollIncrementInpx = 300;

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollable = this.getGridScrollableElement();
      console.log('Scrollable element:', this.scrollable);
    });
  }

  scroll() {
    if (this.scrollable) {
      this.scrollable.scrollLeft += this.scrollIncrementInpx;
    }
  }

  scrollBack() {
    if (this.scrollable) {
      this.scrollable.scrollLeft -= this.scrollIncrementInpx;
    }
    console.log('scrollable <<<<<', this.scrollable.scrollLeft);
  }

  private getGridScrollableElement(): HTMLElement | null {
    const gridElement = this.grid?.element as HTMLElement;
    if (!gridElement) return null;
    return (gridElement.querySelector('.e-movablecontent') ||
      gridElement.querySelector('.e-content')) as HTMLElement;
  }

  getData() {
    this.siteList = [
      {
        siteId: 1,
        siteRefNo: 'BR001',
        siteName: 'Beacon Ridge',
        siteOwner: 'John Doe',
        siteOperator: 'Jane Smith',
        siteType: 'Commercial',
        reportingRegion: 'Australia',
        customAttributes: [],
        mainSiteContacts: 'contact1@example.com',
        technicalServiceEngineer: 'Engineer A',
        customerSuccessManager: 'Manager A',
        product: 'Insight',
        productFontColor: '#ffffff',
        productBackGroundColor: '#f9a825',
        paidAddOns: 'Add-on 1',
        reportingStartDate: new Date('2023-01-01').toString(),
        reportingEndDate: new Date('2025-12-31').toString(),
        utilities: [
          {
            utilityName: 'Electricity',
            baselineStartDate: '',
            utilityFontColor: '#ffffff',
            utilityBackGroundColor: '#26c6da',
          },
          {
            utilityName: 'Gas',
            baselineStartDate: '',
            utilityFontColor: '#ffffff',
            utilityBackGroundColor: '#f57c00',
          },
          {
            utilityName: 'District heating',
            baselineStartDate: '',
            utilityFontColor: '#ffffff',
            utilityBackGroundColor: '#b39ddb',
          },
        ],
        isSettingCompleted: true,
      },
      {
        siteId: 2,
        siteRefNo: 'CT002',
        siteName: 'Crescent Tower',
        siteOwner: 'Alice Brown',
        siteOperator: 'Bob White',
        siteType: 'Residential',
        reportingRegion: 'Germany',
        customAttributes: [],
        mainSiteContacts: 'contact2@example.com',
        technicalServiceEngineer: 'Engineer B',
        customerSuccessManager: 'Manager B',
        product: 'Insight+',
        productFontColor: '#ffffff',
        productBackGroundColor: '#ef6c00',
        paidAddOns: 'Add-on 2',
        reportingStartDate: new Date('2023-01-01').toString(),
        reportingEndDate: new Date('2028-12-31').toString(),
        utilities: [
          {
            utilityName: 'Electricity',
            baselineStartDate: '',
            utilityFontColor: '#ffffff',
            utilityBackGroundColor: '#26c6da',
          },
          {
            utilityName: 'Gas',
            baselineStartDate: '',
            utilityFontColor: '#ffffff',
            utilityBackGroundColor: '#f57c00',
          },
        ],
        isSettingCompleted: false,
      },
      {
        siteId: 3,
        siteRefNo: 'CP003',
        siteName: 'Crystal Pinnacle',
        siteOwner: 'Charlie Grey',
        siteOperator: 'Daisy Pink',
        siteType: 'Industrial',
        reportingRegion: 'Iberia',
        customAttributes: [],
        mainSiteContacts: 'contact3@example.com',
        technicalServiceEngineer: 'Engineer C',
        customerSuccessManager: 'Manager C',
        product: 'Insight+',
        productFontColor: '#ffffff',
        productBackGroundColor: '#ef6c00',
        paidAddOns: 'Add-on 3',
        reportingStartDate: new Date('2022-03-01').toString(),
        reportingEndDate: new Date('2027-03-31').toString(),
        utilities: [
          {
            utilityName: 'Electricity',
            baselineStartDate: '',
            utilityFontColor: '#ffffff',
            utilityBackGroundColor: '#26c6da',
          },
        ],
        isSettingCompleted: true,
      },
      // Add more objects like the above if needed
    ];
  }
}
