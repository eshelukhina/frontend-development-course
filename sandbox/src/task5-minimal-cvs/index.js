/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const versionsList = [Array.from(initialCommit)];

    return {
        head: function() {
            return [...versionsList[versionsList.length - 1]];
        },
        history: function() {
            return versionsList.map(version => [...version]);
        },
        push: function(item) {
            const currentVersion = this.head();
            currentVersion.push(item);
            versionsList.push(currentVersion);
        },
        pop: function() {
            const currentVersion = this.head();
            const removedItem = currentVersion.pop();
            versionsList.push(currentVersion);
            return removedItem;
        }
    };
};