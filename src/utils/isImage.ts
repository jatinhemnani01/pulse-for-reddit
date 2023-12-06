export function isImage(url: string | undefined) {
    return url?.match(/png|jpg|jpeg|gif|wepb$/);
  }