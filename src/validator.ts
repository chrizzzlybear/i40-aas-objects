const aasJsonSchema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'AssetAdministrationShellEnvironment',
    type: 'object',
    id: 'urn://www.admin-shell.io/schema/json/v1.1',
    additionalProperties: false,
    required: ['assetAdministrationShells', 'submodels', 'assets', 'conceptDescriptions'],
    properties: {
        assetAdministrationShells: {
            type: 'array',
            items: {
                $ref: '#/definitions/AssetAdministrationShell',
            },
        },
        submodels: {
            type: 'array',
            items: {
                $ref: '#/definitions/Submodel',
            },
        },
        assets: {
            type: 'array',
            items: {
                $ref: '#/definitions/Asset',
            },
        },
        conceptDescriptions: {
            type: 'array',
            items: {
                $ref: '#/definitions/ConceptDescription',
            },
        },
    },
    definitions: {
        AssetAdministrationShell: {
            type: 'object',
            additionalProperties: false,
            properties: {
                identification: {
                    $ref: '#/definitions/Identifier',
                },
                administration: {
                    $ref: '#/definitions/AdministrativeInformation',
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                derivedFrom: {
                    $ref: '#/definitions/Reference',
                },
                asset: {
                    $ref: '#/definitions/Reference',
                },
                submodels: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
                views: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/View',
                    },
                },
                conceptDictionaries: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/ConceptDictionary',
                    },
                },
            },
        },
        Identifier: {
            type: 'object',
            additionalProperties: false,
            properties: {
                id: {
                    type: 'string',
                },
                idType: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/KeyType',
                        },
                    ],
                },
            },
        },
        KeyType: {
            type: 'string',
            description: '',
            'x-enumNames': ['Custom', 'URI', 'IRDI', 'IdShort'],
            enum: ['Custom', 'URI', 'IRDI', 'IdShort'],
        },
        AdministrativeInformation: {
            type: 'object',
            additionalProperties: false,
            properties: {
                version: {
                    type: 'string',
                },
                revision: {
                    type: 'string',
                },
            },
        },
        LangString: {
            type: 'object',
            additionalProperties: false,
            properties: {
                language: {
                    type: 'string',
                },
                text: {
                    type: 'string',
                },
            },
        },
        Reference: {
            type: 'object',
            additionalProperties: false,
            properties: {
                keys: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Key',
                    },
                },
            },
        },
        Key: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/KeyElements',
                        },
                    ],
                },
                idType: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/KeyType',
                        },
                    ],
                },
                value: {
                    type: 'string',
                },
                local: {
                    type: ['boolean', 'null'],
                },
            },
        },
        KeyElements: {
            type: 'string',
            description: '',
            'x-enumNames': [
                'GlobalReference',
                'ConceptDictionary',
                'AccessPermissionRule',
                'DataElement',
                'View',
                'Property',
                'MultiLanguageProperty',
                'SubmodelElement',
                'File',
                'Blob',
                'ReferenceElement',
                'SubmodelElementCollection',
                'RelationshipElement',
                'Event',
                'Operation',
                'OperationParameter',
                'AssetAdministrationShell',
                'Submodel',
                'ConceptDescription',
                'Asset',
            ],
            enum: [
                'GlobalReference',
                'ConceptDictionary',
                'AccessPermissionRule',
                'DataElement',
                'View',
                'Property',
                'MultiLanguageProperty',
                'SubmodelElement',
                'File',
                'Blob',
                'ReferenceElement',
                'SubmodelElementCollection',
                'RelationshipElement',
                'Event',
                'Operation',
                'OperationParameter',
                'AssetAdministrationShell',
                'Submodel',
                'ConceptDescription',
                'Asset',
            ],
        },
        ModelType: {
            type: 'object',
            additionalProperties: false,
            properties: {
                name: {
                    type: 'string',
                },
            },
        },
        EmbeddedDataSpecification: {
            type: 'object',
            additionalProperties: false,
            properties: {
                hasDataSpecification: {
                    $ref: '#/definitions/Reference',
                },
                dataSpecificationContent: {
                    $ref: '#/definitions/DataSpecificationContent',
                },
            },
        },
        DataSpecificationContent: {
            type: 'object',
        },
        Asset: {
            additionalProperties: false,
            properties: {
                identification: {
                    $ref: '#/definitions/Identifier',
                },
                administration: {
                    $ref: '#/definitions/AdministrativeInformation',
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                assetIdentificationModel: {
                    $ref: '#/definitions/Reference',
                },
            },
        },
        Kind: {
            type: 'string',
            description: '',
            'x-enumNames': ['Type', 'Instance'],
            enum: ['Type', 'Instance'],
        },
        Submodel: {
            additionalProperties: false,
            properties: {
                identification: {
                    $ref: '#/definitions/Identifier',
                },
                administration: {
                    $ref: '#/definitions/AdministrativeInformation',
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                submodelElements: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/SubmodelElement',
                    },
                },
            },
        },
        Constraint: {
            type: 'object',
            additionalProperties: false,
            properties: {
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
            },
            anyOf: [
                {
                    $ref: '#/definitions/Formula',
                },
                {
                    $ref: '#/definitions/Qualifier',
                },
            ],
        },
        DataType: {
            type: 'object',
            additionalProperties: false,
            properties: {
                dataObjectType: {
                    $ref: '#/definitions/DataObjectType',
                },
            },
        },
        DataObjectType: {
            type: 'object',
            additionalProperties: false,
            properties: {
                name: {
                    type: 'string',
                },
            },
        },
        Operation: {
            type: 'object',
            additionalProperties: false,
            properties: {
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                in: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/OperationVariable',
                    },
                },
                out: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/OperationVariable',
                    },
                },
            },
        },
        OperationVariable: {
            type: 'object',
            additionalProperties: false,
            properties: {
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                index: {
                    type: ['integer', 'null'],
                },
                dataType: {
                    $ref: '#/definitions/DataType',
                },
            },
        },
        SubmodelElement: {
            type: 'object',
            properties: {
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
            },
            anyOf: [
                {
                    $ref: '#/definitions/Property',
                },
                {
                    $ref: '#/definitions/File',
                },
                {
                    $ref: '#/definitions/Blob',
                },
                {
                    $ref: '#/definitions/ReferenceElement',
                },
                {
                    $ref: '#/definitions/SubmodelElementCollection',
                },
                {
                    $ref: '#/definitions/RelationshipElement',
                },
                {
                    $ref: '#/definitions/Operation',
                },
                {
                    $ref: '#/definitions/OperationVariable',
                },
            ],
        },
        View: {
            type: 'object',
            additionalProperties: false,
            properties: {
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                containedElements: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
            },
        },
        ConceptDictionary: {
            type: 'object',
            additionalProperties: false,
            properties: {
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                conceptDescriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
            },
        },
        ConceptDescription: {
            type: 'object',
            additionalProperties: false,
            properties: {
                identification: {
                    $ref: '#/definitions/Identifier',
                },
                administration: {
                    $ref: '#/definitions/AdministrativeInformation',
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                isCaseOf: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
            },
        },
        Property: {
            type: 'object',
            additionalProperties: false,
            properties: {
                value: {},
                valueType: {
                    $ref: '#/definitions/DataType',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                valueId: {
                    $ref: '#/definitions/Reference',
                },
            },
        },
        MultiLanguageProperty: {
            type: 'object',
            additionalProperties: false,
            properties: {
                value: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                valueType: {
                    $ref: '#/definitions/DataType',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                valueId: {
                    $ref: '#/definitions/Reference',
                },
            },
        },
        File: {
            type: 'object',
            additionalProperties: false,
            properties: {
                value: {
                    type: 'string',
                },
                valueType: {
                    $ref: '#/definitions/DataType',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                mimeType: {
                    type: 'string',
                },
            },
        },
        Blob: {
            type: 'object',
            additionalProperties: false,
            properties: {
                value: {
                    type: 'string',
                },
                valueType: {
                    $ref: '#/definitions/DataType',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                mimeType: {
                    type: 'string',
                },
            },
        },
        ReferenceElement: {
            type: 'object',
            additionalProperties: false,
            properties: {
                value: {
                    $ref: '#/definitions/Reference',
                },
                valueType: {
                    $ref: '#/definitions/DataType',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
            },
        },
        SubmodelElementCollection: {
            type: 'object',
            additionalProperties: false,
            properties: {
                value: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/SubmodelElement',
                    },
                },
                valueType: {
                    $ref: '#/definitions/DataType',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                allowDuplicates: {
                    type: 'boolean',
                },
                ordered: {
                    type: 'boolean',
                },
            },
        },
        RelationshipElement: {
            type: 'object',
            additionalProperties: false,
            properties: {
                idShort: {
                    type: 'string',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                kind: {
                    oneOf: [
                        {
                            type: 'null',
                        },
                        {
                            $ref: '#/definitions/Kind',
                        },
                    ],
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
                first: {
                    $ref: '#/definitions/Reference',
                },
                second: {
                    $ref: '#/definitions/Reference',
                },
            },
        },
        Qualifier: {
            type: 'object',
            additionalProperties: false,
            properties: {
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
                qualifierType: {
                    type: 'string',
                },
                qualifierValue: {},
                qualifierValueId: {
                    $ref: '#/definitions/Reference',
                },
            },
        },
        Formula: {
            type: 'object',
            additionalProperties: false,
            properties: {
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                dependsOn: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
            },
        },
        PolicyAdministrationPoint: {
            type: 'object',
            additionalProperties: false,
            properties: {
                localAccessControl: {
                    oneOf: [
                        {
                            $ref: '#/definitions/LocalAccessControl',
                        },
                        {
                            type: 'null',
                        },
                    ],
                },
                externalAccessControl: {
                    oneOf: [
                        {
                            type: 'object',
                        },
                        {
                            type: 'null',
                        },
                    ],
                },
            },
        },
        AccessControl: {
            type: 'object',
            additionalProperties: false,
            properties: {
                selectableSubjectAttributes: {
                    $ref: '#/definitions/Reference',
                },
                defaultSubjectAttributes: {
                    $ref: '#/definitions/Reference',
                },
                selectablePermissions: {
                    $ref: '#/definitions/Reference',
                },
                defaultPermissions: {
                    $ref: '#/definitions/Reference',
                },
                selectableEnvironmentAttributes: {
                    oneOf: [
                        {
                            $ref: '#/definitions/Submodel',
                        },
                        {
                            type: 'null',
                        },
                    ],
                },
                defaultEnvironmentAttributes: {
                    $ref: '#/definitions/Reference',
                },
                accessPermissionRule: {
                    oneOf: [
                        {
                            $ref: '#/definitions/AccessPermissionRule',
                        },
                        {
                            type: 'null',
                        },
                    ],
                },
            },
        },
        AccessPermissionRule: {
            type: 'object',
            additionalProperties: false,
            properties: {
                identification: {
                    $ref: '#/definitions/Identifier',
                },
                administration: {
                    $ref: '#/definitions/AdministrativeInformation',
                },
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                descriptions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                parent: {
                    $ref: '#/definitions/Reference',
                },
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
                targetSubjectAttributes: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/SubjectAttributes',
                    },
                    minItems: 1,
                },
                permissionsPerObject: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/PermissionsPerObject',
                    },
                },
            },
        },
        SubjectAttributes: {
            type: 'object',
            additionalProperties: false,
            properties: {
                subjectAttributes: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Property',
                    },
                    minItems: 1,
                },
            },
        },
        PermissionsPerObject: {
            type: 'object',
            additionalProperties: false,
            properties: {
                object: {
                    $ref: '#/definitions/Reference',
                },
                targetObjectAttributes: {
                    oneOf: [
                        {
                            $ref: '#/definitions/ObjectAttributes',
                        },
                        {
                            type: 'null',
                        },
                    ],
                },
                permission: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Permission',
                    },
                },
            },
        },
        ObjectAttributes: {
            type: 'object',
            additionalProperties: false,
            properties: {
                objectAttribute: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Property',
                        minItems: 1,
                    },
                },
            },
        },
        Permission: {
            type: 'object',
            additionalProperties: false,
            properties: {
                permission: {
                    $ref: '#/definitions/Reference',
                },
                kindOfPermission: {
                    type: 'string',
                    enum: ['allow', 'deny', 'not applicable', 'undefined'],
                },
            },
        },
    },
};

import JSONSCHEMA from 'jsonschema';
const Validator = JSONSCHEMA.Validator;
var validator = new Validator();
var instance = 4;
var schema = aasJsonSchema;
function validate(data: any): any {
    return validator.validate(data, schema);
}
export { validate };
