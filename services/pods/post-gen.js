/**
 * This script fixes a type generation error produced by the openapi-generator-cli
 * library in the typescript model files. When using polymorphisms with the
 * discriminator object, the types generated use the string value of the enum("some_value")
 * rather than the enum type itself(SomeEnum.SomeValue).
 */

console.log("Running post-generation script for the Workflows service")

types = {}

types["Archive"] = {
    enum: "EnumArchiveType",
    literals: ["s3", "system"]
}
types["ReqArchive"] = types["Archive"]
    
types["ReqContext"] = {
    enum: "EnumContextType",
    literals: ["dockerhub", "github", "gitlab", "local"]
}

types["ReqDestination"] = {
    enum: "EnumDestinationType",
    literals: ["dockerhub", "local"]
}

types["ReqIdentity"] = {
    enum: "EnumIdentityType",
    literals: ["dockerhub", "github"]
}

types["ReqTask"] = {
    enum: "EnumTaskType",
    literals: ["image_build", "container_run", "request", "tapis_job", "tapis_actor", "function"]
}
types["Task"] = types["ReqTask"]