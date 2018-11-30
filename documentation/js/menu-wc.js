'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">demo-app documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"' : 'data-target="#xs-components-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"' : 'id="xs-components-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/CurrencyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CurrencyComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/DemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/DynamicFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicFormsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ModelDrivenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModelDrivenComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductListComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ShowErrorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowErrorsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/TemplateDrivenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateDrivenComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserListComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#directives-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"' : 'data-target="#xs-directives-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"') + '>\n                                    <span class="icon ion-md-code-working"></span>\n                                    <span>Directives</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="directives-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"' : 'id="xs-directives-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="directives/CalendarDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarDirective</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#pipes-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"' : 'data-target="#xs-pipes-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"') + '>\n                                    <span class="icon ion-md-add"></span>\n                                    <span>Pipes</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="pipes-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"' : 'id="xs-pipes-links-module-AppModule-f50db1c46b4e628974623bad30c4c0a1"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/ConverterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConverterPipe</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-UserModule-c1077ac73661879e7e14edc685ee9a5b"' : 'data-target="#xs-components-links-module-UserModule-c1077ac73661879e7e14edc685ee9a5b"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-UserModule-c1077ac73661879e7e14edc685ee9a5b"' : 'id="xs-components-links-module-UserModule-c1077ac73661879e7e14edc685ee9a5b"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/Product.html" data-type="entity-link">Product</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/CurrencyService.html" data-type="entity-link">CurrencyService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"') + '>\n                <span class="icon ion-ios-swap"></span>\n                <span>Interceptors</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"') + '>\n                \n                    <li class="link">\n                        <a href="interceptors/AuthInterceptorService.html" data-type="entity-link">AuthInterceptorService</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                 ' + (isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"') + '>\n            <span class="icon ion-ios-lock"></span>\n            <span>Guards</span>\n            <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n                ' + (isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"') + '>\n            \n                <li class="link">\n                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>\n                </li>\n            \n            </ul>\n            </li>\n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));