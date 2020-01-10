import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  const provider = '{ provide: BsDatepickerConfig, useFactory: getDatepickerConfig }';
  const previewSwagger = `<p>{</p>
    <p>&nbsp; &nbsp; "swagger": "http://10.12.1.42:2017/swagger/v1/swagger.json",</p>
    <p>&nbsp; &nbsp; "prefix": "propsysServiceProxy",</p>
    <p>&nbsp; &nbsp; "output": "./src/app/_services/propsys",</p>
    <p>&nbsp; &nbsp; "generateExamples": "true"</p>
    <p>}</p>`
  const navigationCode = 'new AppMenuItem(*namaNavigasi*, *permission*, *icon*, *image*, *url*)'
  const datePickerSetting = `<p>export function getDatepickerConfig(): BsDatepickerConfig {</p>
    <p>&nbsp; &nbsp; return Object.assign(new BsDatepickerConfig(), {</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; dateInputFormat: 'DD/MM/YYYY',</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; containerClass: 'theme-green',</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; adaptivePosition: true,</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; useUtc: false,</p>
    <p>&nbsp; &nbsp; });</p>
    <p>}</p>`
  const formBuilder=`<p>contohForm: FormGroup;</p>
  <p>constructor(</p>
  <p>&nbsp; &nbsp; private _fb: FormBuilder,</p>
  <p>) {</p>
  <p>&nbsp; &nbsp; super(injector);</p>
  <p>&nbsp; &nbsp; this.contohForm= this._fb.group({</p>
  <p>&nbsp; &nbsp; &nbsp; &nbsp; 'input1': [null, Validators.compose([Validators.required])],</p>
  <p>&nbsp; &nbsp; &nbsp; &nbsp; 'input2': [null, Validators.compose([Validators.required, Validators.maxLength(5), ValidationService.alphaNumValidator, Validators.pattern(/^\S*$/)])],</p>
  <p>&nbsp; &nbsp; &nbsp; &nbsp; 'input3': [null, Validators.compose([Validators.required, Validators.maxLength(50), ValidationService.alphaNumValidator])],</p>
  <p>&nbsp; &nbsp; });</p>
  <p>}</p>`
  const formHTML = `<p><span style="font-size: 12px;">&lt;form [formGroup]="contohForm" class="m-form m-form--state" &gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; div class="form-group row" [formControlStyle]="contohForm"&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;label class="col-sm-3 col-form-label"&gt;Label 1&lt;i class="text-danger"&gt;*&lt;/i&gt;&lt;/label&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;div class="col-sm-8"&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;input #hasMessage autocomplete="off" formControlName="input1"/&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &lt;/div&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; div class="form-group row" [formControlStyle]="contohForm"&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;label class="col-sm-3 col-form-label"&gt;Label 2&lt;i class="text-danger"&gt;*&lt;/i&gt;&lt;/label&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;div class="col-sm-8"&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;input #hasMessage autocomplete="off" formControlName="input2"/&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &lt;/div&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; div class="form-group row" [formControlStyle]="contohForm"&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;label class="col-sm-3 col-form-label"&gt;Label 3&lt;i class="text-danger"&gt;*&lt;/i&gt;&lt;/label&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;div class="col-sm-8"&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;input #hasMessage autocomplete="off" formControlName="input3"/&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;</span></p>
  <p><span style="font-size: 12px;">&nbsp; &nbsp; &lt;/div&gt;</span></p>
  <p><span style="font-size: 12px;">&lt;/form&gt;</span></p>`;
  const conService = `<p>constructor(</p>
    <p>&nbsp; &nbsp; injector: Injector,</p>
    <p>&nbsp; &nbsp; private _socialService: SocialMediaService</p>
    <p>) {</p>
    <p>&nbsp; &nbsp; super(injector)</p>
    <p>}</p>`;
  const contService = `<p><span style="font-size: 12px;">this._socialService.GetAllListSocialMedia().subscribe((data: any) =&gt; {</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; if (data.error) {</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; this.msg.error(data.error.message, data.error.details)</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; }</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; else {</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; this.primengDatatableHelper.records = data.result;</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; this.primengDatatableHelper.totalRecordsCount = data.result.length</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; this.primengDatatableHelper.defaultRecordsCountPerPage = 5;</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; }</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; this.loading = false;</span></p>
    <p><span style="font-size: 12px;">}, err =&gt; {</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; let msgVar = err.statusText</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; this.msg.error(msgVar);</span></p>
    <p><span style="font-size: 12px;">&nbsp; &nbsp; this.loading = false;</span></p>
    <p><span style="font-size: 12px;">});</span></p>`
  function goTo(link) {
    window.open(link);
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 10, md: 10 }
                }}
                tabs={[
                  {
                    tabButton: "Getting started",
                    tabContent: (
                      <span>
                        <h3>PREREQUIREMENTS</h3>
                        <p>Untuk menjalankan project angular yang dibutuhkan antara lain:
                        <ul>
                            <li><a onClick={goTo.bind(this, "https://nodejs.org/en/")}>Node.js</a> 6.9+ with npm 3.10+</li>
                            <li><a onClick={goTo.bind(this, "https://www.typescriptlang.org/")}>Typescript</a> 2.0+</li>
                            <li><a onClick={goTo.bind(this, "https://yarnpkg.com/en/")}>Yarn</a></li>
                          </ul>
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Folder",
                    tabContent: (
                      <span>
                        <h3>Struktur Folder</h3>
                        <pre>
                          <ul>
                            <li>angular.json</li>
                            <li>package-lock.json</li>
                            <li>package.json</li>
                            <li>tsconfig.json</li>
                            <li>yarn.lock</li>
                            <li>app</li>
                            <li>nswag
                              <ul>
                                <li>swagger.json</li>
                              </ul>
                            </li>
                            <li>src
                              <ul>
                                <li>index.html</li>
                                <li>main.ts</li>
                                <li>styles.scss</li>
                                <li>tsconfig.app.json</li>
                                <li>typing.d.ts</li>
                                <li>app
                                  <ul>
                                    <li>app-routing.module.ts</li>
                                    <li>app.component.html</li>
                                    <li>app.component.ts</li>
                                    <li>app.module.ts</li>
                                    <li>AppPreBootstrap.ts</li>
                                    <li>_services</li>
                                    <li>main
                                      <ul>
                                        <li>main-routing.module.ts</li>
                                        <li>main.component.html</li>
                                        <li>main.component.ts</li>
                                        <li>main.module.ts</li>
                                      </ul>
                                    </li>
                                    <li>shared
                                      <ul>
                                        <li>app-component-base.ts</li>
                                        <li>AppConst.ts</li>
                                        <li>dropdown</li>
                                        <li>dropimage
                                          <ul>
                                            <li>dropimage.component.html</li>
                                            <li>dropimage.component.ts</li>
                                          </ul>
                                        </li>
                                        <li>layout
                                          <ul>
                                            <li>app-menu-item.ts</li>
                                            <li>app-menu.ts</li>
                                            <li>app-navigation.service.ts</li>
                                            <li>footer.component.html</li>
                                            <li>footer.component.ts</li>
                                            <li>header.component.html</li>
                                            <li>header.component.ts</li>
                                            <li>sidebar.component.html</li>
                                            <li>sidebar.component.ts</li>
                                          </ul>
                                        </li>
                                        <li>util
                                        <ul>
                                            <li>busy-if.directive.ts</li>
                                            <li>JqPluginDirective.ts</li>
                                            <li>percentage-value-accessor.directive.ts</li>
                                            <li>priceFormDir.ts</li>
                                            <li>PrimengDatatableHelper.ts</li>
                                            <li>upload-file.directive.ts</li>
                                          </ul>
                                        </li>
                                        <li>validation
                                        <ul>
                                            <li>control-message.component.ts</li>
                                            <li>form-validation-style.directive.ts</li>
                                            <li>validation.service.ts</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>user
                                      <ul>
                                        <li>login</li>
                                        <li>user-routing.module.ts</li>
                                        <li>user.module.ts</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li>assets
                                  <ul>
                                    <li>appconfig.json</li>
                                    <li>favicon.ico</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </pre>
                      </span>
                    )
                  },
                  {
                    tabButton: "Command",
                    tabContent: (
                      <span>
                        <h3>Important Command</h3>
                        <table>
                          <thead>
                            <tr>
                              <td><b>Command</b></td>
                              <td><b>Fungsi</b></td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><code>yarn start</code></td>
                              <td>Menjalankan Project</td>
                            </tr>
                            <tr>
                              <td><code>yarn build</code></td>
                              <td>Build Project Untuk Deploy</td>
                            </tr>
                            <tr>
                              <td><code>yarn nswag</code></td>
                              <td>Menjalankan fungsi nswag untuk membuat service yang terdaftar pada swagger BE</td>
                            </tr>
                            <tr>
                              <td><code>yarn install</code></td>
                              <td>Menginstall package yang dibutuhkan</td>
                            </tr>
                            <tr>
                              <td><code>ng g c *nama*</code></td>
                              <td>membuat component angular dengan nama *nama*</td>
                            </tr>
                          </tbody>
                        </table>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tutorial",
                    tabContent: (
                      <span>
                        <h3>Component</h3>
                        <p>Untuk membuat component dapat dilakukan dengan cara </p>
                        <ul>
                          <li>Buka direktori yang akan ditambahi angular component di terminal(Lebih baik jika di direktori sudah ada module nya)</li>
                          <li>ketik <code><span class="smoke">ng g c *namaComponent*</span></code> di terminal</li>
                          <li>angular component akan otomatis terbuat dan terimport ke module angular di direktori tersebut.</li>
                        </ul>
                        <h3>Navigation</h3>
                        <ul>
                          <li>Untuk menambahkan navigasi buka file di <span class="smoke">src/app/shared/layout/app-navigation.service.ts</span> kemudian tambahkan</li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: navigationCode}}></div></code>
                          <li>Tambahkan script diatas untuk menambahkan navigasi </li>
                        </ul>
                        <h3>Swagger</h3>
                        <ul>
                          <li>Untuk menjalankan swagger buka file di <span class="smoke">nswag/swagger.json</span></li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: previewSwagger}}></div></code>
                          <li>isi swagger dengan url json dari swagger BE</li>
                          <li>isi prefix dengan nama service yang diinginkan</li>
                          <li>isi output dengan direktori yang diinginkan untuk menyimpan service</li>
                          <li>jalankan command yarn nwag</li>
                        </ul>
                        <h3>Service</h3>
                        <ul>
                          <li>Untuk memanggil service pastikan service sudah ada di swagger BE dan sudah menjalankan swagger</li>
                          <li>tambahkan service pada constructor</li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: conService}}></div></code>
                          <li>panggil service yang diinginkan</li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: contService}}></div></code>
                          <li>Tambahkan script diatas untuk menambahkan navigasi </li>
                        </ul>
                        <h3>Form Validation</h3>
                        <p>Membuat validasi form</p>
                        <ul>
                          <li>Buat var formGroup dan construktor formBuilder di file ts component</li>
                          <li>Definisikan validasi yang dibutuhkan di construktor file ts</li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: formBuilder}}></div></code>
                          <li>Buat form dengan menggunakan form group yang telah di buat diatas pada file html</li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: formHTML}}></div></code>
                        </ul>
                        <h3>Datepicker</h3>
                        <ul>
                          <li>Tambahkan config berikut ke modul yang akan menggunakan datePicker</li>
                          <code><div class="smoke code" dangerouslySetInnerHTML={{__html: datePickerSetting}}></div></code>
                          <li>import <span class="smoke">BsDatepickerModule.forRoot()</span> ke module</li>
                          <li>tambahkan provider berikut untuk mengganti config default datepicker dengan config yang tadi dibuat</li>
                          <pre>{provider}</pre>
                        </ul>
                        
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}