export default async function triggerLazyLoad(
  setLoadingState,
  category,
  router
) {
  setLoadingState(true);
  setTimeout(() => {
    router.push(`/categories/${category}`);
    setTimeout(() => {
      setLoadingState(false);
    }, 6050);
  }, 6000);
}
