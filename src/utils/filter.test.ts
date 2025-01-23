import {test, expect, describe} from "bun:test";
import {filter} from "./filter";

describe("filter", () => {
    test("should filter keywords", () => {
        expect(filter({content: "hello world", keywords: ["hello"]})).toEqual(["hello"]);
    });
});