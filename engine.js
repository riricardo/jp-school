(function(root) {
  'use strict';
  const MAX = 10,
    skills = ['forward', 'reverse', 'toKanji', 'fromKanji'];
  const eligible = (c, k) => !['toKanji', 'fromKanji'].includes(k) || (c.kind === 'word' && /[\u3400-\u9fff]/.test(c.japanese) && !!c.kana);
  const reading = c => c.kana || (c.segments || [c.japanese]).map(s => typeof s === 'string' ? s : s[1]).join('');

  function proficiency(data, stats, k) {
    const cards = data.filter(c => eligible(c, k));
    const points = cards.reduce((n, c) => n + Math.min(MAX, Math.max(0, stats[c.id]?.[k]?.streak || 0)), 0);
    return {
      percent: cards.length ? points / (cards.length * MAX) * 100 : 0,
      max: cards.length * MAX,
      points
    };
  }

  function pick(pool, stats, count, directions, random = Math.random) {
    return pool.flatMap(c => directions.filter(k => eligible(c, k)).map(skill => {
      const s = stats[c.id]?.[skill];
      return {
        id: c.id,
        skill,
        key: Math.pow(Math.max(.000001, random()), 1 / (1 + (s?.errors || 0) * 2 + MAX - (s?.streak || 0)))
      };
    })).sort((a, b) => b.key - a.key).slice(0, count).map(({
      id,
      skill
    }) => ({
      id,
      skill
    }));
  }
  // A ajuda invalida somente a habilidade atual e permanece após recarregar.
  function markAssisted(round, stats) {
    const task = round?.queue[0];
    if (!task) return;
    round.assisted = true;
    const item = stats[task.id] ??= {};
    const s = item[task.skill] ??= {
      streak: 0,
      errors: 0
    };
    s.streak = 0;
  }

  function answer(round, stats, known) {
    known = known && !round.assisted;
    round.assisted = false;
    const task = round.queue.shift();
    if (!task) return;
    const item = stats[task.id] ??= {};
    const s = item[task.skill] ??= {
      streak: 0,
      errors: 0
    };
    if (known) {
      s.streak = Math.min(MAX, s.streak + 1);
    } else {
      s.streak = 0;
      s.errors++;
      // Uma única revisão por desafio nesta rodada, mesmo se errar de novo.
      if (!task.review) {
        const gap = Math.max(1, Math.min(2000, Math.round(Number(round.repeatGap) || 20)));
        round.queue.splice(Math.min(gap, round.queue.length), 0, {
          ...task,
          review: true
        });
      }
    }
    return task;
  }
  const api = {
    skills,
    eligible,
    reading,
    proficiency,
    pick,
    answer,
    markAssisted
  };
  if (typeof module !== 'undefined') module.exports = api;
  else root.StudyEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);
