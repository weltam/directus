import { AbstractServiceOptions, Item, PrimaryKey } from '../types';
import { ItemsService, MutationOptions } from './items';

export class NotificationsService extends ItemsService {
	constructor(options: AbstractServiceOptions) {
		super('directus_notifications', options);
	}

	async createOne(data: Partial<Item>, opts?: MutationOptions): Promise<PrimaryKey> {
		return super.createOne(data, opts);
	}

	async createMany(data: Partial<Item>[], opts?: MutationOptions): Promise<PrimaryKey[]> {
		return super.createMany(data, opts);
	}
}
