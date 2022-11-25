export default function triggerLazyLoad(setLoadingState, category, router) {
  setLoadingState(true);
  setTimeout(() => {
    router.push(`/categories/${category}`);
  }, 6000);
}
