import { AssetAdministrationShell } from '../src/identifiables/AssetAdministrationShell';
import { expect } from 'chai';
import { IdTypeEnum } from '../src/types/IdTypeEnum';
import { KeyElementsEnum } from '../src/types/KeyElementsEnum';
import { CountryCodeEnum } from '../src/types/CountryCodeEnum';

describe('Construct AssetAdministrationShell', function() {
    it('create an AssetAdministrationShell', function() {
        let aas = new AssetAdministrationShell({
            identification: {
                id: 'http://sap.com/customer/2',
                idType: IdTypeEnum.IRI,
            },
            embeddedDataSpecifications: [],
            descriptions: [
                {
                    language: CountryCodeEnum.Germany,
                    text: 'VWS eines Kundensystems',
                },
            ],
            conceptDictionaries: [],
            submodels: [
                {
                    keys: [
                        {
                            idType: IdTypeEnum.IRI,
                            type: KeyElementsEnum.Submodel,
                            value: 'http://sap.com/order/management/om246063-15a0-4361-bfa7-1g817f91434g0',
                            local: true,
                        },
                    ],
                },
            ],
            views: [],
            asset: {
                keys: [
                    {
                        idType: IdTypeEnum.IRI,
                        type: KeyElementsEnum.Submodel,
                        value: 'http://sap.com/order/management/om246063-15a0-4361-bfa7-1g817f91434g0',
                        local: true,
                    },
                ],
            },
            idShort: 'customer2',
            administration: {
                revision: '0.0.0',
                version: '0.0.1',
            },
        });
        expect(Object.keys(aas)).to.include.members(['asset', 'identification', 'submodels', 'modelType']);
    });
    it('create an AssetAdministrationShell without an asset and throw an error when call .toJSON', function() {
        let aas = new AssetAdministrationShell({
            identification: {
                id: 'http://sap.com/customer/2',
                idType: IdTypeEnum.IRI,
            },
            embeddedDataSpecifications: [],
            descriptions: [
                {
                    language: CountryCodeEnum.Germany,
                    text: 'VWS eines Kundensystems',
                },
            ],
            conceptDictionaries: [],
            submodels: [
                {
                    keys: [
                        {
                            idType: IdTypeEnum.IRI,
                            type: KeyElementsEnum.Submodel,
                            value: 'http://sap.com/order/management/om246063-15a0-4361-bfa7-1g817f91434g0',
                            local: true,
                        },
                    ],
                },
            ],
            views: [],
            idShort: 'customer2',
            administration: {
                revision: '0.0.0',
                version: '0.0.1',
            },
        });
        expect(Object.keys(aas)).to.include.members(['identification', 'submodels', 'modelType']);
        expect(function() {
            aas.toJSON();
        }).to.throw();
    });
});

describe('Get a Reference to the aas', function() {
    it('generate a Reference', function() {
        let aas = new AssetAdministrationShell({
            asset: {
                keys: [
                    {
                        idType: IdTypeEnum.IRI,
                        type: KeyElementsEnum.Submodel,
                        value: 'http://sap.com/order/management/om246063-15a0-4361-bfa7-1g817f91434g0',
                        local: true,
                    },
                ],
            },
            identification: {
                id: 'http://sap.com/customer/2',
                idType: IdTypeEnum.IRI,
            },
            modelType: {
                name: KeyElementsEnum.AssetAdministrationShell,
            },
            embeddedDataSpecifications: [],
            descriptions: [
                {
                    language: CountryCodeEnum.Germany,
                    text: 'VWS eines Kundensystems',
                },
            ],
            conceptDictionaries: [],
            submodels: [
                {
                    keys: [
                        {
                            idType: IdTypeEnum.IRI,
                            type: KeyElementsEnum.Submodel,
                            value: 'http://sap.com/order/management/om246063-15a0-4361-bfa7-1g817f91434g0',
                            local: true,
                        },
                    ],
                },
            ],
            views: [],
            idShort: 'customer2',
            administration: {
                revision: '0.0.0',
                version: '0.0.1',
            },
        });
        console.log(aas.getReference());
        expect(Object.keys(aas.getReference())).to.have.members(['keys']);
    });
});
