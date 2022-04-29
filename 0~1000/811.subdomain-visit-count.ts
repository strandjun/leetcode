/**
 * https://leetcode.com/problems/subdomain-visit-count/
 * Medium
 */

function subdomainVisits(cpdomains: string[]): string[] {
    const res: string[] = []

    const map = new Map<string, number>()
    for (let i = 0; i < cpdomains.length; i++) {
        const cp = cpdomains[i].split(' ')
        const parts = cp[1].split('.')
        const domains: string[] = []

        for (let d = parts.length - 1; d >= 0; d--) {
            let el = ''
            if (domains.length === 0) {
                el = `${parts[d]}`
            } else {
                el = `${parts[d]}.${domains[domains.length - 1]}`
            }
            domains.push(el)

            map.set(el, map.has(el) ? (map.get(el) || 0) + +cp[0] : +cp[0])
        }
    }

    for (const [d, c] of map) {
        res.push(`${c} ${d}`)
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        subdomainVisits(["9001 discuss.leetcode.com"]),
        ["9001 com", "9001 leetcode.com", "9001 discuss.leetcode.com"]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]),
        ["951 com", "901 mail.com", "900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 org", "5 wiki.org"]
    );
});
