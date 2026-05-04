import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories = ['Electronics', 'Books', 'Clothing', 'Home & Kitchen'];

  getAllCategories() {
    return this.categories;
  }
}
