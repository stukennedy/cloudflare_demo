import Card from '@components/Card';
import { html, fragment } from '@lib/html';
import { getAllCustomers } from '@model/index';

export const onRequestPost: PagesFunction = async () => {
  const data = await getAllCustomers();
  return fragment(data.map(Card).join(''));
};

export const onRequestGet: PagesFunction = async () => {
  return html(/*html*/ `
  <h1 class="text-2xl text-white mb-8">Hello World</h1>
  <div class="flex flex-wrap h-full gap-8" hx-post="/" hx-trigger="load">
    Loading...
  </div>
`);
};
