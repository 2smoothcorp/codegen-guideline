"shx rm -f ./services/graphql/types-graphql.generated.tsx && graphql-codegen --config codegen-doc.yml"

'''
"shx rm -f ./services/graphql/api/**/*.generated.tsx && shx rm -f ./services/graphql/api/types-graphql.generated.tsx && shx rm -f ./services/graphql/api/index.tsx && graphql-codegen --config codegen-doc.yml && barrelsby --name index.tsx --directory ./services/graphql/api --exclude ./services/graphql/api/types-graphql.generated.tsx --delete --location top --singleQuotes"
'''

npx gql-generator --schemaFilePath ./src/services/graphql/schema.graphql --destDirPath ./src/services/graphql/api


'''
shx rm -f ./services/graphql/api/**/*.generated.tsx && shx rm -f ./services/graphql/api/types-graphql.generated.tsx && shx rm -f ./services/graphql/api/index.tsx && graphql-codegen --config codegen-gen.yml && barrelsby --name index.tsx --directory ./services/graphql/api --exclude ./services/graphql/api/types-graphql.generated.tsx --delete --location top --singleQuotes
'''

"shx rm -f ./services/graphql/api/**/*.generated.tsx && shx rm -f ./services/graphql/api/index.tsx && graphql-codegen --config codegen-gen.yml && barrelsby --name index.tsx --directory ./services/graphql/api --exclude ./services/graphql/api/types-graphql.generated.tsx --delete --location top --singleQuotes"


