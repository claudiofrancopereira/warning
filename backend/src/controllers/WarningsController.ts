import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Warning from '../models/Warning';

export default {
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const warningsRepository = getRepository(Warning);

        const warning = await warningsRepository.findOneOrFail(id);

        return response.json(warning);
    },

    async index(request: Request, response: Response) {
        const warningsRepository = getRepository(Warning);

        const warnings = await warningsRepository.find();
        
        return response.json(warnings);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            contact,
            description,
            vehicle,
            arrival_time,
            end_time,
            outcome,
            nature,
            status,
        } = request.body

        const warningsRepository = getRepository(Warning);

        const warning = warningsRepository.create({
            name,
            contact,
            description,
            vehicle,
            arrival_time,
            end_time,
            outcome,
            nature,
            status
        });

        await warningsRepository.save(warning);

        return response.status(201).json(warning);
    }
}