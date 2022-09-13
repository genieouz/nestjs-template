import { NotFoundException } from "@nestjs/common";
import { Document, FilterQuery, Model, ObjectId, UpdateQuery } from "mongoose";
import { QueryDataConfigInput } from "../graphql/query-data-config.input";
import { normalizeQueryDataConfig } from "../utils";

export abstract class AbstractService<T extends Document> {
    private abstractModel: Model<T>;
    protected constructor(model: Model<T>) {
        this.abstractModel = model;
    }

    insertOne(payload: T): Promise<T> {
        return this.abstractModel.create(payload);
    }

    async findMany(queryConfig?: QueryDataConfigInput): Promise<T[]> {
        const { limit, skip } = normalizeQueryDataConfig(queryConfig);
        return this.abstractModel.find().skip(skip).limit(limit);
    }

    async findOneById(id: ObjectId) {
        return this.abstractModel.findById(id);
    }

    async findOne(queryFilter: FilterQuery<T>) {
        return this.abstractModel.findOne(queryFilter);
    }

    async findOneByIdOrFail(id: ObjectId) {
        const result = await this.findOneById(id);
        if(!result) {
            throw new NotFoundException(`L'entité avec id=${id} n'existe pas`);
        }
        return result;
    }

    async updateOneById(id: ObjectId, payload: UpdateQuery<T>) {
        const result = await this.abstractModel.updateOne({ _id: id }, payload);
        return Boolean(result.modifiedCount);
    }
}
