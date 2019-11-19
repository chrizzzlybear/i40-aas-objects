const aasJsonSchema = {
    $schema: 'https://json-schema.org/draft/2019-09/schema',
    title: 'AssetAdministrationShellEnvironment',
    type: 'object',
    $id: 'urn://www.admin-shell.io/schema/json/v2.0',
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
        Referable: {
            type: 'object',
            properties: {
                idShort: {
                    type: 'string',
                },
                category: {
                    type: 'string',
                },
                description: {
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
            },
            required: ['idShort', 'modelType'],
        },
        Identifiable: {
            allOf: [
                { $ref: '#/definitions/Referable' },
                {
                    properties: {
                        identification: {
                            $ref: '#/definitions/Identifier',
                        },
                        administration: {
                            $ref: '#/definitions/AdministrativeInformation',
                        },
                    },
                    required: ['identification'],
                },
            ],
        },
        Qualifiable: {
            type: 'object',
            properties: {
                qualifiers: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Constraint',
                    },
                },
            },
        },
        HasSemantics: {
            type: 'object',
            properties: {
                semanticId: {
                    $ref: '#/definitions/Reference',
                },
            },
            required: ['semanticId'],
        },
        HasDataSpecification: {
            type: 'object',
            properties: {
                embeddedDataSpecifications: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/EmbeddedDataSpecification',
                    },
                },
            },
        },
        AssetAdministrationShell: {
            allOf: [
                { $ref: '#/definitions/Identifiable' },
                { $ref: '#/definitions/HasDataSpecification' },
                {
                    properties: {
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
                        security: {
                            $ref: '#/definitions/Security',
                        },
                    },
                    required: ['asset'],
                },
            ],
        },
        Identifier: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                },
                idType: {
                    $ref: '#/definitions/KeyType',
                },
            },
            required: ['id', 'idType'],
        },
        KeyType: {
            type: 'string',
            enum: ['Custom', 'IRDI', 'IRI', 'IdShort', 'FragmentId'],
        },
        AdministrativeInformation: {
            type: 'object',
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
            properties: {
                language: {
                    type: 'string',
                },
                text: {
                    type: 'string',
                },
            },
            required: ['language', 'text'],
        },
        Reference: {
            type: 'object',
            properties: {
                keys: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Key',
                    },
                },
            },
            required: ['keys'],
        },
        Key: {
            type: 'object',
            properties: {
                type: {
                    $ref: '#/definitions/KeyElements',
                },
                idType: {
                    $ref: '#/definitions/KeyType',
                },
                value: {
                    type: 'string',
                },
                local: {
                    type: 'boolean',
                },
            },
            required: ['type', 'idType', 'value', 'local'],
        },
        KeyElements: {
            type: 'string',
            enum: [
                'Asset',
                'AssetAdministrationShell',
                'ConceptDescription',
                'Submodel',
                'AccessPermissionRule',
                'AnnotatedRelationshipElement',
                'BasicEvent',
                'Blob',
                'Capability',
                'ConceptDictionary',
                'DataElement',
                'File',
                'Entity',
                'Event',
                'MultiLanguageProperty',
                'Operation',
                'Property',
                'Range',
                'ReferenceElement',
                'RelationshipElement',
                'SubmodelElement',
                'SubmodelElementCollection',
                'View',
                'GlobalReference',
                'FragmentReference',
            ],
        },
        ModelTypes: {
            type: 'string',
            enum: [
                'Asset',
                'AssetAdministrationShell',
                'ConceptDescription',
                'Submodel',
                'AccessPermissionRule',
                'AnnotatedRelationshipElement',
                'BasicEvent',
                'Blob',
                'Capability',
                'ConceptDictionary',
                'DataElement',
                'File',
                'Entity',
                'Event',
                'MultiLanguageProperty',
                'Operation',
                'Property',
                'Range',
                'ReferenceElement',
                'RelationshipElement',
                'SubmodelElement',
                'SubmodelElementCollection',
                'View',
                'GlobalReference',
                'FragmentReference',
                'Constraint',
                'Formula',
                'Qualifier',
            ],
        },
        ModelType: {
            type: 'object',
            properties: {
                name: {
                    $ref: '#/definitions/ModelTypes',
                },
            },
            required: ['name'],
        },
        EmbeddedDataSpecification: {
            type: 'object',
            properties: {
                dataSpecification: {
                    $ref: '#/definitions/Reference',
                },
                dataSpecificationContent: {
                    $ref: '#/definitions/DataSpecificationContent',
                },
            },
            required: ['dataSpecification', 'dataSpecificationContent'],
        },
        DataSpecificationContent: {
            oneOf: [
                { $ref: '#/definitions/DataSpecificationIEC61360Content' },
                { $ref: '#/definitions/DataSpecificationPhysicalUnitContent' },
            ],
        },
        DataSpecificationPhysicalUnitContent: {
            type: 'object',
            properties: {
                unitName: {
                    type: 'string',
                },
                unitSymbol: {
                    type: 'string',
                },
                definition: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/LangString',
                    },
                },
                siNotation: {
                    type: 'string',
                },
                siName: {
                    type: 'string',
                },
                dinNotation: {
                    type: 'string',
                },
                eceName: {
                    type: 'string',
                },
                eceCode: {
                    type: 'string',
                },
                nistName: {
                    type: 'string',
                },
                sourceOfDefinition: {
                    type: 'string',
                },
                conversionFactor: {
                    type: 'string',
                },
                registrationAuthorityId: {
                    type: 'string',
                },
                supplier: {
                    type: 'string',
                },
            },
            required: ['unitName', 'unitSymbol', 'definition'],
        },
        DataSpecificationIEC61360Content: {
            allOf: [
                { $ref: '#/definitions/ValueObject' },
                {
                    type: 'object',
                    properties: {
                        dataType: {
                            enum: [
                                'DATE',
                                'STRING',
                                'STRING_TRANSLATABLE',
                                'REAL_MEASURE',
                                'REAL_COUNT',
                                'REAL_CURRENCY',
                                'BOOLEAN',
                                'URL',
                                'RATIONAL',
                                'RATIONAL_MEASURE',
                                'TIME',
                                'TIMESTAMP',
                            ],
                        },
                        definition: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/LangString',
                            },
                        },
                        preferredName: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/LangString',
                            },
                        },
                        shortName: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/LangString',
                            },
                        },
                        sourceOfDefinition: {
                            type: 'string',
                        },
                        symbol: {
                            type: 'string',
                        },
                        unit: {
                            type: 'string',
                        },
                        unitId: {
                            $ref: '#/definitions/Reference',
                        },
                        valueFormat: {
                            type: 'string',
                        },
                        valueList: {
                            $ref: '#/definitions/ValueList',
                        },
                        levelType: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/LevelType',
                            },
                        },
                    },
                    required: ['preferredName'],
                },
            ],
        },
        LevelType: {
            type: 'string',
            enum: ['Min', 'Max', 'Nom', 'Typ'],
        },
        ValueList: {
            type: 'object',
            properties: {
                valueReferencePairTypes: {
                    type: 'array',
                    minItems: 1,
                    items: {
                        $ref: '#/definitions/ValueReferencePairType',
                    },
                },
            },
            required: ['valueReferencePairTypes'],
        },
        ValueReferencePairType: {
            allOf: [{ $ref: '#/definitions/ValueObject' }],
        },
        ValueObject: {
            type: 'object',
            properties: {
                value: { type: 'string' },
                valueId: {
                    $ref: '#/definitions/Reference',
                },
                valueType: {
                    type: 'string',
                    enum: [
                        'anyUri',
                        'base64Binary',
                        'boolean',
                        'date',
                        'dateTime',
                        'dateTimeStamp',
                        'decimal',
                        'integer',
                        'long',
                        'int',
                        'short',
                        'byte',
                        'nonNegativeInteger',
                        'positiveInteger',
                        'unsignedLong',
                        'unsignedInt',
                        'unsignedShort',
                        'unsignedByte',
                        'nonPositiveInteger',
                        'negativeInteger',
                        'double',
                        'duration',
                        'dayTimeDuration',
                        'yearMonthDuration',
                        'float',
                        'gDay',
                        'gMonth',
                        'gMonthDay',
                        'gYear',
                        'gYearMonth',
                        'hexBinary',
                        'NOTATION',
                        'QName',
                        'string',
                        'normalizedString',
                        'token',
                        'language',
                        'Name',
                        'NCName',
                        'ENTITY',
                        'ID',
                        'IDREF',
                        'NMTOKEN',
                        'time',
                    ],
                },
            },
        },
        Asset: {
            allOf: [
                { $ref: '#/definitions/Identifiable' },
                { $ref: '#/definitions/HasDataSpecification' },
                {
                    properties: {
                        kind: {
                            $ref: '#/definitions/AssetKind',
                        },
                        assetIdentificationModel: {
                            $ref: '#/definitions/Reference',
                        },
                        billOfMaterial: {
                            $ref: '#/definitions/Reference',
                        },
                    },
                    required: ['kind'],
                },
            ],
        },
        AssetKind: {
            type: 'string',
            enum: ['Type', 'Instance'],
        },
        ModelingKind: {
            type: 'string',
            enum: ['Template', 'Instance'],
        },
        Submodel: {
            allOf: [
                { $ref: '#/definitions/Identifiable' },
                { $ref: '#/definitions/HasDataSpecification' },
                { $ref: '#/definitions/Qualifiable' },
                { $ref: '#/definitions/HasSemantics' },
                {
                    properties: {
                        kind: {
                            $ref: '#/definitions/ModelingKind',
                        },
                        submodelElements: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/SubmodelElement',
                            },
                        },
                    },
                },
            ],
        },
        Constraint: {
            type: 'object',
            properties: {
                modelType: {
                    $ref: '#/definitions/ModelType',
                },
            },
            required: ['modelType'],
        },
        Operation: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        inputVariable: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/OperationVariable',
                            },
                        },
                        outputVariable: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/OperationVariable',
                            },
                        },
                        inoutputVariable: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/OperationVariable',
                            },
                        },
                    },
                },
            ],
        },
        OperationVariable: {
            type: 'object',
            properties: {
                value: {
                    oneOf: [
                        { $ref: '#/definitions/Blob' },
                        { $ref: '#/definitions/File' },
                        { $ref: '#/definitions/Capability' },
                        { $ref: '#/definitions/Entity' },
                        { $ref: '#/definitions/Event' },
                        { $ref: '#/definitions/BasicEvent' },
                        { $ref: '#/definitions/MultiLanguageProperty' },
                        { $ref: '#/definitions/Operation' },
                        { $ref: '#/definitions/Property' },
                        { $ref: '#/definitions/Range' },
                        { $ref: '#/definitions/ReferenceElement' },
                        { $ref: '#/definitions/RelationshipElement' },
                        { $ref: '#/definitions/SubmodelElementCollection' },
                    ],
                },
            },
            required: ['value'],
        },
        SubmodelElement: {
            allOf: [
                { $ref: '#/definitions/Referable' },
                { $ref: '#/definitions/HasDataSpecification' },
                { $ref: '#/definitions/HasSemantics' },
                { $ref: '#/definitions/Qualifiable' },
                {
                    properties: {
                        kind: {
                            $ref: '#/definitions/ModelingKind',
                        },
                    },
                },
            ],
        },
        Event: {
            allOf: [{ $ref: '#/definitions/SubmodelElement' }],
        },
        BasicEvent: {
            allOf: [
                { $ref: '#/definitions/Event' },
                {
                    properties: {
                        observed: {
                            $ref: '#/definitions/Reference',
                        },
                    },
                    required: ['observed'],
                },
            ],
        },
        EntityType: {
            type: 'string',
            enum: ['CoManagedEntity', 'SelfManagedEntity'],
        },
        Entity: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        statements: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/SubmodelElement',
                            },
                        },
                        entityType: {
                            $ref: '#/definitions/EntityType',
                        },
                        asset: {
                            $ref: '#/definitions/Reference',
                        },
                    },
                    required: ['entityType'],
                },
            ],
        },
        View: {
            allOf: [
                { $ref: '#/definitions/Referable' },
                { $ref: '#/definitions/HasDataSpecification' },
                { $ref: '#/definitions/HasSemantics' },
                {
                    properties: {
                        containedElements: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Reference',
                            },
                        },
                    },
                },
            ],
        },
        ConceptDictionary: {
            allOf: [
                { $ref: '#/definitions/Referable' },
                { $ref: '#/definitions/HasDataSpecification' },
                {
                    properties: {
                        conceptDescriptions: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Reference',
                            },
                        },
                    },
                },
            ],
        },
        ConceptDescription: {
            allOf: [
                { $ref: '#/definitions/Identifiable' },
                { $ref: '#/definitions/HasDataSpecification' },
                {
                    properties: {
                        isCaseOf: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Reference',
                            },
                        },
                    },
                },
            ],
        },
        Capability: {
            allOf: [{ $ref: '#/definitions/SubmodelElement' }],
        },
        Property: {
            allOf: [{ $ref: '#/definitions/SubmodelElement' }, { $ref: '#/definitions/ValueObject' }],
        },
        Range: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        valueType: {
                            type: 'string',
                            enum: [
                                'anyUri',
                                'base64Binary',
                                'boolean',
                                'date',
                                'dateTime',
                                'dateTimeStamp',
                                'decimal',
                                'integer',
                                'long',
                                'int',
                                'short',
                                'byte',
                                'nonNegativeInteger',
                                'positiveInteger',
                                'unsignedLong',
                                'unsignedInt',
                                'unsignedShort',
                                'unsignedByte',
                                'nonPositiveInteger',
                                'negativeInteger',
                                'double',
                                'duration',
                                'dayTimeDuration',
                                'yearMonthDuration',
                                'float',
                                'gDay',
                                'gMonth',
                                'gMonthDay',
                                'gYear',
                                'gYearMonth',
                                'hexBinary',
                                'NOTATION',
                                'QName',
                                'string',
                                'normalizedString',
                                'token',
                                'language',
                                'Name',
                                'NCName',
                                'ENTITY',
                                'ID',
                                'IDREF',
                                'NMTOKEN',
                                'time',
                            ],
                        },
                        min: { type: 'string' },
                        max: { type: 'string' },
                    },
                    required: ['valueType', 'min', 'max'],
                },
            ],
        },
        MultiLanguageProperty: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        value: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/LangString',
                            },
                        },
                        valueId: {
                            $ref: '#/definitions/Reference',
                        },
                    },
                },
            ],
        },
        File: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        value: {
                            type: 'string',
                        },
                        mimeType: {
                            type: 'string',
                        },
                    },
                    required: ['mimeType', 'value'],
                },
            ],
        },
        Blob: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        value: {
                            type: 'string',
                        },
                        mimeType: {
                            type: 'string',
                        },
                    },
                    required: ['mimeType', 'value'],
                },
            ],
        },
        ReferenceElement: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        value: {
                            $ref: '#/definitions/Reference',
                        },
                    },
                },
            ],
        },
        SubmodelElementCollection: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        value: {
                            type: 'array',
                            items: {
                                oneOf: [
                                    { $ref: '#/definitions/Blob' },
                                    { $ref: '#/definitions/File' },
                                    { $ref: '#/definitions/Capability' },
                                    { $ref: '#/definitions/Entity' },
                                    { $ref: '#/definitions/Event' },
                                    { $ref: '#/definitions/BasicEvent' },
                                    { $ref: '#/definitions/MultiLanguageProperty' },
                                    { $ref: '#/definitions/Operation' },
                                    { $ref: '#/definitions/Property' },
                                    { $ref: '#/definitions/Range' },
                                    { $ref: '#/definitions/ReferenceElement' },
                                    { $ref: '#/definitions/RelationshipElement' },
                                    { $ref: '#/definitions/SubmodelElementCollection' },
                                ],
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
            ],
        },
        RelationshipElement: {
            allOf: [
                { $ref: '#/definitions/SubmodelElement' },
                {
                    properties: {
                        first: {
                            $ref: '#/definitions/Reference',
                        },
                        second: {
                            $ref: '#/definitions/Reference',
                        },
                    },
                    required: ['first', 'second'],
                },
            ],
        },
        AnnotatedRelationshipElement: {
            allOf: [
                { $ref: '#/definitions/RelationshipElement' },
                {
                    properties: {
                        annotation: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Reference',
                            },
                        },
                    },
                },
            ],
        },
        Qualifier: {
            allOf: [
                { $ref: '#/definitions/Constraint' },
                { $ref: '#/definitions/HasSemantics' },
                { $ref: '#/definitions/ValueObject' },
                {
                    properties: {
                        type: {
                            type: 'string',
                        },
                    },
                    required: ['type'],
                },
            ],
        },
        Formula: {
            allOf: [
                { $ref: '#/definitions/Constraint' },
                {
                    properties: {
                        dependsOn: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Reference',
                            },
                        },
                    },
                },
            ],
        },
        Security: {
            type: 'object',
            properties: {
                accessControlPolicyPoints: {
                    $ref: '#/definitions/AccessControlPolicyPoints',
                },
                certificate: {
                    type: 'array',
                    items: {
                        oneOf: [{ $ref: '#/definitions/BlobCertificate' }],
                    },
                },
                requiredCertificateExtension: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
            },
            required: ['accessControlPolicyPoints'],
        },
        Certificate: {
            type: 'object',
        },
        BlobCertificate: {
            allOf: [
                { $ref: '#/definitions/Certificate' },
                {
                    properties: {
                        blobCertificate: {
                            $ref: '#/definitions/Blob',
                        },
                        containedExtension: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Reference',
                            },
                        },
                        lastCertificate: {
                            type: 'boolean',
                        },
                    },
                },
            ],
        },
        AccessControlPolicyPoints: {
            type: 'object',
            properties: {
                policyAdministrationPoint: {
                    $ref: '#/definitions/PolicyAdministrationPoint',
                },
                policyDecisionPoint: {
                    $ref: '#/definitions/PolicyDecisionPoint',
                },
                policyEnforcementPoint: {
                    $ref: '#/definitions/PolicyEnforcementPoint',
                },
                policyInformationPoints: {
                    $ref: '#/definitions/PolicyInformationPoints',
                },
            },
            required: ['policyAdministrationPoint', 'policyDecisionPoint', 'policyEnforcementPoint'],
        },
        PolicyAdministrationPoint: {
            type: 'object',
            properties: {
                localAccessControl: {
                    $ref: '#/definitions/AccessControl',
                },
                externalAccessControl: {
                    type: 'boolean',
                },
            },
            required: ['externalAccessControl'],
        },
        PolicyInformationPoints: {
            type: 'object',
            properties: {
                internalInformationPoint: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                },
                externalInformationPoint: {
                    type: 'boolean',
                },
            },
            required: ['externalInformationPoint'],
        },
        PolicyEnforcementPoint: {
            type: 'object',
            properties: {
                externalPolicyEnforcementPoint: {
                    type: 'boolean',
                },
            },
            required: ['externalPolicyEnforcementPoint'],
        },
        PolicyDecisionPoint: {
            type: 'object',
            properties: {
                externalPolicyDecisionPoints: {
                    type: 'boolean',
                },
            },
            required: ['externalPolicyDecisionPoints'],
        },
        AccessControl: {
            type: 'object',
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
                    $ref: '#/definitions/Reference',
                },
                defaultEnvironmentAttributes: {
                    $ref: '#/definitions/Reference',
                },
                accessPermissionRule: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/AccessPermissionRule',
                    },
                },
            },
        },
        AccessPermissionRule: {
            allOf: [
                { $ref: '#/definitions/Referable' },
                { $ref: '#/definitions/Qualifiable' },
                {
                    properties: {
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
                    required: ['targetSubjectAttributes'],
                },
            ],
        },
        SubjectAttributes: {
            type: 'object',
            properties: {
                subjectAttributes: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Reference',
                    },
                    minItems: 1,
                },
            },
        },
        PermissionsPerObject: {
            type: 'object',
            properties: {
                object: {
                    $ref: '#/definitions/Reference',
                },
                targetObjectAttributes: {
                    $ref: '#/definitions/ObjectAttributes',
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
            properties: {
                objectAttribute: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Property',
                    },
                    minItems: 1,
                },
            },
        },
        Permission: {
            type: 'object',
            properties: {
                permission: {
                    $ref: '#/definitions/Reference',
                },
                kindOfPermission: {
                    type: 'string',
                    enum: ['Allow', 'Deny', 'NotApplicable', 'Undefined'],
                },
            },
            required: ['permission', 'kindOfPermission'],
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
